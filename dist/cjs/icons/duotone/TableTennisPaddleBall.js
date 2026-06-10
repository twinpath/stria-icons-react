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
var TableTennisPaddleBall_exports = {};
__export(TableTennisPaddleBall_exports, {
  default: () => TableTennisPaddleBall_default
});
module.exports = __toCommonJS(TableTennisPaddleBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TableTennisPaddleBallDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.822 320C362.828 320 319.83 362.998 319.83 415.998C319.83 468.996 362.828 511.994 415.822 511.994C468.818 511.994 511.814 468.996 511.814 415.998C511.814 362.998 468.818 320 415.822 320ZM415.822 287.994C443.816 287.994 469.508 297.248 490.582 312.508C530.002 228.736 514.137 125.314 442.496 57.68C354.773 -25.143 214.818 -16.478 129.613 68.945L74.949 123.748C66.596 132.123 59.889 141.051 54 150.186L291.279 387.465C304.291 330.568 355.002 287.994 415.822 287.994Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M305.17 478.879C269.84 482.867 233.166 471.525 206.045 444.334L170.1 408.297L89.07 501.143C77.154 514.936 56.09 515.697 43.219 502.795L26.168 485.717L9.164 468.594C-3.682 455.666 -2.922 434.512 10.81 422.543L103.193 341.219L66.592 304.523C26.23 264.059 20.574 202.328 54.185 150.186L291.465 387.465C289.359 396.67 288.012 406.156 288.012 415.998C288.012 438.975 294.56 460.234 305.17 478.879Z" })
    ]
  }
));
TableTennisPaddleBallDuotone.displayName = "TableTennisPaddleBallDuotone";
var TableTennisPaddleBall_default = TableTennisPaddleBallDuotone;
