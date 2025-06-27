-- Savings Accounts Table
CREATE TABLE SavingsAccounts (
  AccountID NUMBER PRIMARY KEY,
  CustomerID NUMBER,
  Balance NUMBER(12, 2)
);

-- Employees Table
CREATE TABLE Employees (
  EmpID NUMBER PRIMARY KEY,
  Name VARCHAR2(100),
  Department VARCHAR2(50),
  Salary NUMBER(10, 2)
);

-- General Accounts Table for Transfer
CREATE TABLE Accounts (
  AccountID NUMBER PRIMARY KEY,
  CustomerID NUMBER,
  Balance NUMBER(12, 2)
);
-- Sample data
INSERT INTO SavingsAccounts VALUES (1, 1001, 5000);
INSERT INTO SavingsAccounts VALUES (2, 1002, 8000);

INSERT INTO Employees VALUES (1, 'Alice', 'Sales', 50000);
INSERT INTO Employees VALUES (2, 'Bob', 'HR', 45000);

INSERT INTO Accounts VALUES (101, 1001, 10000);
INSERT INTO Accounts VALUES (102, 1002, 5000);

COMMIT;

--Scenario 1: Process Monthly Interest
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  UPDATE SavingsAccounts
  SET Balance = Balance + (Balance * 0.01);

  COMMIT;
END;
/
BEGIN
  ProcessMonthlyInterest;
END;
/
--Scenario 2: Update Employee Bonus
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  dept_name IN VARCHAR2,
  bonus_pct IN NUMBER
) IS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * bonus_pct / 100)
  WHERE Department = dept_name;

  COMMIT;
END;
/
BEGIN
  UpdateEmployeeBonus('Sales', 10);
END;
/
-- Scenario 3: Transfer Funds Between Accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
  from_acc_id IN NUMBER,
  to_acc_id IN NUMBER,
  amount IN NUMBER
) IS
  from_balance NUMBER;
BEGIN
  -- Get the current balance of source account
  SELECT Balance INTO from_balance
  FROM Accounts
  WHERE AccountID = from_acc_id;

  -- Check for sufficient funds
  IF from_balance < amount THEN
    DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds.');
    RETURN;
  END IF;

  -- Deduct amount from source account
  UPDATE Accounts
  SET Balance = Balance - amount
  WHERE AccountID = from_acc_id;

  -- Add amount to destination account
  UPDATE Accounts
  SET Balance = Balance + amount
  WHERE AccountID = to_acc_id;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Transfer of ' || amount || ' from account ' || from_acc_id || ' to account ' || to_acc_id || ' completed.');
EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Error: One or both accounts not found.');
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('An unexpected error occurred: ' || SQLERRM);
END;
/

BEGIN
  TransferFunds(101, 102, 500);
END;
/
SELECT * FROM Accounts;