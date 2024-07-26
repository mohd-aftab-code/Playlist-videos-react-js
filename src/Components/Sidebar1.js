import React from "react";
import { Link } from "react-router-dom";
const Sidebar1 = () => {
    return (
        <div className="sidebar">
            <div className="sidebar1">
                <h3>PythonCourse -1</h3>
                <h4>Setting up the environment</h4>
                <Link to="/1">Installing Python on Windows (1:53)</Link>
                <Link to="/2">Working with IDLE (4:17)</Link>

                <h4>Python Basics</h4>  
                <Link to="/3">Printing in Python (4:36)</Link>
                <Link to="/4">The Escape Character (3:57)</Link>
                <Link to="/5">Values and Types (4:29)</Link>
                <Link to="/6">Let's calculate-Introduction to Variable (5:45)</Link>
                <Link to="/7">Variables (5:24)</Link>
                <Link to="/8">Naming Rules of Variables (4:24)</Link>
                <Link to="/9">Types Conversion Function (3:39)</Link>
                <Link to="/10">Reading input from Keyboard (9:10)</Link>
                <Link to="/comments">Comments (2:03)</Link>
                <Link to="/area-of-rectangle">Program-Area of Rectangle (4:47)</Link>
                <Link to="/arithmetic-operators">Arithmetic Operators (2:23)</Link>
                <Link to="/operator-precedence">Operator Precedence (4:23)</Link>
                <Link to="/algebraic-expression">Algebraic Expression to Python Statement (2:33)</Link>
                <Link to="/types-of-errors">Types of Errors (5:59)</Link>
                <Link to="/more-about-print">More about print() (7:25)</Link>
                <Link to="/celsius-to-fahrenheit">Program-Celsius to Fahrenheit Converter (4:20)</Link>

                <h4>Conditional Statements</h4>
                <Link to="/boolean-expression">Boolean Expression and Relational Operator (3:20)</Link>
                <Link to="/if-statement">if statement (6:30)</Link>
                <Link to="/if-else-statement">if else statement (7:42)</Link>
                <Link to="/if-elif-else-statement">if elif else statement (6:13)</Link>
                <Link to="/logical-operator">Logical Operator (6:17)</Link>
                <Link to="/nested-if">Nested if Statement (3:57)</Link>

                <h4>Loops</h4>
                <Link to="/while-loops">While Loops (4:21)</Link>
                <Link to="/number-series">Printing Number Series (7:30)</Link>
                <Link to="/sum-of-numbers">Sum of Numbers (7:11)</Link>
                <Link to="/factorial">Program: Calculate Factorial (5:18)</Link>
                <Link to="/user-control-loop">User Control the Loop iterations (5:18)</Link>
                <Link to="/infinite-loops">Infinite Loops (1:44)</Link>
                <Link to="/for-loop">for loop (6:32)</Link>
                <Link to="/multiplication-table">Program: Printing Multiplication table (3:58)</Link>
                <Link to="/sum-of-n-natural-number">Program: Sum of n Natural Number (5:03)</Link>
                <Link to="/break-continue">break and continue Statement (3:39)</Link>
                <Link to="/else-in-loops">Else in Loops (4:11)</Link>
                <Link to="/check-prime-number">Program: check Prime Number (7:04)</Link>

                <h4>Programming Challenges</h4>
                <Link to="/sum-of-digits">Sum of digits (5:57)</Link>
                <Link to="/armstrong-number">Armstrong Number (5:41)</Link>
                <Link to="/palindrome-number">Check Palindrome Number (9:78)</Link>

            </div>
        </div>
    )
};
export default Sidebar1