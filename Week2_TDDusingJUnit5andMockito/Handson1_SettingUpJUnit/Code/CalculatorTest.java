import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    @Test
    public void testAddition() {
        int result = 3 + 7;
        assertEquals(10, result);
    }
}
