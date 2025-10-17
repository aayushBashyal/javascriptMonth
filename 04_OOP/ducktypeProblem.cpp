#include <iostream>
#include <string>

// --- The Rigid Types ---

// Class 1: The type the function is designed for
class JetPlane {
public:
    void move() const {
        std::cout << "✈️ JET: Firing afterburners! (Moving by flying)" << std::endl;
    }
};

// Class 2: A different, unrelated type
class Train {
public:
    // It has the EXACT SAME method signature as JetPlane, but the compiler ignores this.
    void move() const {
        std::cout << "🚂 TRAIN: Honking the horn! (Moving by rail)" << std::endl;
    }
};

// --- The Rigid Function (The Problem) ---

// This function explicitly demands a JetPlane.
void startMoving(const JetPlane& entity) {
    std::cout << "[Processor] JetPlane accepted. Initiating movement..." << std::endl;
    entity.move();
}


int main() {
    JetPlane myJet;
    Train myTrain;

    // 1. Success: Passing the expected type
    startMoving(myJet);

    // 2. Fails at COMPILE TIME: Passing the functionally correct but nominally wrong type.
    // The C++ compiler will throw an error here because 'Train' is not a 'JetPlane'.
    // startMoving(myTrain); // <-- THIS LINE CAUSES A COMPILER ERROR!

    std::cout << "\nCompilation failed because 'startMoving' explicitly demands a 'JetPlane' type, even though 'Train' has the necessary 'move()' method." << std::endl;

    return 0;
}
