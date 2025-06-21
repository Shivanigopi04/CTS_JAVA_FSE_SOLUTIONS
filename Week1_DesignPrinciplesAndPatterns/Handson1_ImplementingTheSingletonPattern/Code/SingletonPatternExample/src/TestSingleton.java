public class TestSingleton {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("Starting the application...");

        Logger logger2 = Logger.getInstance();
        logger2.log("Performing some operations...");

       
        if (logger1 == logger2) {
            System.out.println("✅ Only one instance of Logger is used.");
        } else {
            System.out.println("❌ Different instances were created.");
        }
    }
}
