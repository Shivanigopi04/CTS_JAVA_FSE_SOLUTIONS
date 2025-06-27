import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup complete");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testAddition() {
        int a = 10;
        int b = 20;
        int result = calculator.add(a, b);
        assertEquals(30, result);
    }

    @Test
    public void testSubtraction() {
        int a = 15;
        int b = 5;
        int result = calculator.subtract(a, b);
        assertEquals(10, result);
    }

    @Test
    public void testMultiplication() {
        int a = 3;
        int b = 4;
        int result = calculator.multiply(a, b);
        assertEquals(12, result);
    }

    @Test
    public void testDivision() {
        int a = 20;
        int b = 5;
        int result = calculator.divide(a, b);
        assertEquals(4, result);
    }

    @Test(expected = ArithmeticException.class)
    public void testDivideByZero() {
        int a = 10;
        int b = 0;
        calculator.divide(a, b);
    }
}