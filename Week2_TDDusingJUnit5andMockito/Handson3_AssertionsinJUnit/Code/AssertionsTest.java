import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Check if two values are equal
        assertEquals("Sum should be 5", 5, 2 + 3);

        // Check if a condition is true
        assertTrue("5 is greater than 3", 5 > 3);

        // Check if a condition is false
        assertFalse("5 is not less than 3", 5 < 3);

        // Check if an object is null
        assertNull("Should be null", null);

        // Check if an object is not null
        assertNotNull("Should not be null", new Object());
    }
}
