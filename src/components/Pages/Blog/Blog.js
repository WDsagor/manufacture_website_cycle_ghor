import React from "react";

const Blog = () => {
  return (
    <div className="mt-20 max-w-screen-md mx-auto px-5">
      <div class="collapse collapse-plus border border-primary bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          How will you improve the performance of a React Application ?
        </div>
        <div class="collapse-content">
          <p className=" font-bold">Answer :</p>
          <ul>
            <li>Code-splitting in React using dynamic import()</li>
            <li>Keeping component state local where necessary.</li>
            <li>Windowing or list virtualization in React.</li>
            <li>
              Memoizing React components to prevent unnecessary re-renders.
            </li>
            <li>Lazy loading images in React.</li>
          </ul>
        </div>
      </div>
      <div class="collapse collapse-plus border border-primary bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          What are the different ways to manage a state in a React application?
        </div>
        <div class="collapse-content">
          <p className=" font-bold">Answer :</p>
          <ol className=" pl-2 list-disc">
            <li>Global state.</li>
            <li>Local state.</li>
            <li>Server state.</li>
            <li>URL state.</li>
          </ol>
        </div>
      </div>
      <div class="collapse collapse-plus border border-primary bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          How does prototypical inheritance work ?
        </div>
        <div class="collapse-content">
          <p className=" font-bold">Answer :</p>
          <p>
            JavaScript is a prototype-based, Object Oriented programming
            language. After the ES6 updates, JavaScript allowed for “prototypal
            inheritance”, meaning that objects and methods can be shared,
            extended, and copied. Sharing amid objects makes for easy
            inheritance of structure (data fields), behavior (functions /
            methods), and state (data values). JavaScript is the most common of
            the prototype-capable languages, and its capabilities are relatively
            unique. When used appropriately, prototypical inheritance in
            JavaScript is a powerful tool that can save hours of coding. Today,
            we want to get you acquainted with prototypal inheritance in
            JavaScript to get you up to date with the ES6 capabilities.
          </p>
        </div>
      </div>
      <div class="collapse collapse-plus border border-primary bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">
          What is a unit test? Why should write unit tests?
        </div>
        <div class="collapse-content">
          <p className=" font-bold">What is a unit test?</p>
          <p className=" font-bold">Answer :</p>
          <p>
            Unit testing ensures that all code meets quality standards before
            it's deployed.
          </p>
          <p className=" font-bold">Why should write unit tests?</p>
          <p className=" font-bold">Answer :</p>
          <p>
            This ensures a reliable engineering environment where quality is
            paramount. Over the course of the product development life cycle,
            unit testing saves time and money, and helps developers write better
            code, more efficiently.
          </p>
        </div>
      </div>
      <div class="collapse collapse-plus border border-primary bg-base-100 rounded-box mb-2">
        <input type="checkbox" />
        <div class="collapse-title text-lg font-medium">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </div>
        <div class="collapse-content">
          <p className=" font-bold">Answer :</p>
          <p>
            const products = [name, price, etc...]; <br /> const found =
            products.find(product => product.name=== name vlue);
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
