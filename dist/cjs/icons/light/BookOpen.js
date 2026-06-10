var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BookOpen_exports = {};
__export(BookOpen_exports, {
  default: () => BookOpen_default
});
module.exports = __toCommonJS(BookOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookOpenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M541.047 56.781C495.094 40.125 450.781 32.656 411.047 32C352.094 32.938 309.094 49.5 288 59.766C266.891 49.5 223.891 32.938 164.797 32C124.766 31.953 80.266 40.359 34.969 56.781C14.047 64.344 0 84.406 0 106.703V409.578C0 424.234 6.875 437.641 18.891 446.375C30.703 454.906 45.531 457.359 59.625 453.156C178.516 416.813 268.875 472.203 273.891 475.344C277.84 477.613 281.184 480 288 480C294.52 480 298.107 477.627 302.062 475.422C312.844 468.734 400.359 417.766 516.406 453.156C530.516 457.406 545.266 454.906 557.156 446.344C569.125 437.641 576 424.234 576 409.578V106.703C576 84.422 561.953 64.359 541.047 56.781ZM272 438.121C247.053 426.088 200.986 408.75 141.531 408.75C113.703 408.75 83.031 412.562 50.344 422.516C45.938 423.859 41.344 423.109 37.656 420.469C34.016 417.812 32 413.953 32 409.578V106.703C32 97.844 37.562 89.875 45.859 86.875C87.656 71.703 127.938 63.953 164.453 64C216.256 64.811 254.15 79.262 272 87.662V438.121ZM544 409.578C544 413.953 541.984 417.812 538.406 420.422C534.641 423.125 530.109 423.844 525.719 422.547C424.08 391.557 341.311 420.439 304 438.289V87.662C321.846 79.262 359.719 64.811 411.391 64C446.703 63.938 487.734 71.484 530.141 86.875H530.156C538.438 89.875 544 97.844 544 106.703V409.578Z" })
  }
));
BookOpenLight.displayName = "BookOpenLight";
var BookOpen_default = BookOpenLight;
