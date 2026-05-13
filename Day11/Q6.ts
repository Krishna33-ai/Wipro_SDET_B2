type User = {
  name: string;
};

type UnwrapPromise<T> =
  T extends Promise<infer U>
    ? U
    : T;

type A =
  UnwrapPromise<
    Promise<string>
  >;

type B =
  UnwrapPromise<
    Promise<number>
  >;

type C =
  UnwrapPromise<boolean>;

async function fetchUser():
  Promise<User> {

  return {
    name: "Siva"
  };
}

type FetchResult =
  UnwrapPromise<
    ReturnType<
      typeof fetchUser
    >
  >;

type Same =
  Awaited<
    Promise<string>
  >;

console.log("A → string");
console.log("B → number");
console.log("C → boolean");
console.log("FetchResult → User");
console.log("Same → string");