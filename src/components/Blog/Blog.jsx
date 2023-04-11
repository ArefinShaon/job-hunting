import React from "react";
import BlogBanner from "../BlogBanner/BlogBanner";

const Blog = () => {
  return (
    <div>
      <BlogBanner></BlogBanner>
      <div className="mt-12">
        <h2 className="text-primary text-xl font-bold text-start px-6">
          When should you use context API?
        </h2>
        <p className="mt-2 text-start px-6">
          Context is primarily used when some data needs to be accessible by
          many components at different nesting levels. Apply it sparingly
          because it makes component reuse more difficult. If you only want to
          avoid passing some props through many levels, component composition is
          often a simpler solution than context.
        </p>
        <h2 className="text-primary text-xl font-bold text-start mt-12 px-6">
          What is a custom hook?
        </h2>
        <p className="mt-2 text-start px-6">
          {" "}
          A custom hook is a special JavaScript function whose name starts with
          'use' and can be used to call other hooks. Let's take a look at some
          major differences between a custom React JS hook and React JS
          components: A custom hook does not require a specific signature.{" "}
        </p>
        <h2 className="text-primary text-xl font-bold text-start mt-12 px-6">
          What is useRef?
        </h2>
        <p className="mt-2 text-start px-6">
          useRef(initialValue) is a built-in React hook that accepts one
          argument as the initial value and returns a reference (aka ref). A
          reference is an object having a special property current .The useRef
          Hook allows you to persist values between renders. It can be used to
          store a mutable value that does not cause a re-render when updated. It
          can be used to access a DOM element directly.
        </p>
        <h2 className="text-primary text-xl font-bold text-start mt-12 px-6">
          What is useMemo?
        </h2>
        <p className="mt-2 text-start px-6">
          useMemo() is a function that returns a memoized value of a passed in
          resource-intensive function. It is very useful in optimizing the
          performance of a React component by eliminating repeating heavy
          computations.
        </p>
      </div>
    </div>
  );
};

export default Blog;
