/* eslint-disable no-undef */
const todolist = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todolist();

describe("todolist Testing", () => {
  beforeAll(() => {
    add({
      title: "MY EVENT FRESHERS",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add a new todo in list", () => {
    // expect(all.len).toBe(0);

    let len = all.length;

    add({
      title: "node js learning",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(len + 1);
  });

  test("Mark todo as a completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrive all todos that are overdue", () => {
    let listtotodos = overdue();

    expect(
      listtotodos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrive all todos that are dueToday", () => {
    let listtotodos = dueToday();

    expect(
      listtotodos.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrive all todos that are dueLater", () => {
    let listtotodos = dueLater();

    expect(
      listtotodos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
