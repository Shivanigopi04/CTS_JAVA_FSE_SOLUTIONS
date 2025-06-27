SET SERVEROUTPUT ON;
-- Create Customers Table
CREATE TABLE Customers (
  CustomerID NUMBER PRIMARY KEY,
  Name VARCHAR2(100),
  Age NUMBER,
  Balance NUMBER(10, 2),
  LoanInterestRate NUMBER(5, 2),
  IsVIP VARCHAR2(5)
);


-- Create Loans Table
CREATE TABLE Loans (
  LoanID NUMBER PRIMARY KEY,
  CustomerID NUMBER REFERENCES Customers(CustomerID),
  DueDate DATE
);

INSERT INTO Customers VALUES (1, 'Alice', 65, 12000, 9.5, 'FALSE');
INSERT INTO Customers VALUES (2, 'Bob', 45, 8000, 10.0, 'FALSE');
INSERT INTO Customers VALUES (3, 'Charlie', 70, 11000, 8.5, 'FALSE');

INSERT INTO Loans VALUES (101, 1, SYSDATE + 15);
INSERT INTO Loans VALUES (102, 2, SYSDATE + 40);
INSERT INTO Loans VALUES (103, 3, SYSDATE + 10);

COMMIT;
-- 1. Discount for Customers > 60

DECLARE
  CURSOR cust_cursor IS
    SELECT CustomerID, Age, LoanInterestRate
    FROM Customers
    WHERE Age > 60;

BEGIN
  FOR cust_rec IN cust_cursor LOOP
    UPDATE Customers
    SET LoanInterestRate = LoanInterestRate - 1
    WHERE CustomerID = cust_rec.CustomerID;
  END LOOP;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Discount applied to customers above 60.');
END;
/
--2. Promote to VIP for Balance > 10000

DECLARE
  CURSOR cust_cursor IS
    SELECT CustomerID, Balance
    FROM Customers
    WHERE Balance > 10000;

BEGIN
  FOR cust_rec IN cust_cursor LOOP
    UPDATE Customers
    SET IsVIP = 'TRUE'
    WHERE CustomerID = cust_rec.CustomerID;
  END LOOP;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('VIP status updated for eligible customers.');
END;
/
--3. Send Loan Due Reminders

DECLARE
  CURSOR loan_cursor IS
    SELECT CustomerID, LoanID, DueDate
    FROM Loans
    WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;

  customer_name VARCHAR2(100);
BEGIN
  FOR loan_rec IN loan_cursor LOOP
    SELECT Name INTO customer_name
    FROM Customers
    WHERE CustomerID = loan_rec.CustomerID;

    DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || customer_name || ', your loan (ID: ' || loan_rec.LoanID || ') is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-Mon-YYYY') || '.');
  END LOOP;
END;
/