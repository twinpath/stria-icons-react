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
var Square7_exports = {};
__export(Square7_exports, {
  default: () => Square7_default
});
module.exports = __toCommonJS(Square7_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Square7Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM317.125 163.375L205.125 371.375C200.781 379.438 192.531 384 183.969 384C180.125 384 176.25 383.094 172.625 381.125C160.937 374.844 156.594 360.281 162.875 348.625L255.812 176H152C138.75 176 128 165.25 128 152S138.75 128 152 128H296C304.438 128 312.281 132.438 316.594 139.688C320.938 146.938 321.125 155.938 317.125 163.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M316.594 139.688C320.938 146.938 321.125 155.938 317.125 163.375L205.125 371.375C200.781 379.438 192.531 384 183.969 384C180.125 384 176.25 383.094 172.625 381.125C160.937 374.844 156.594 360.281 162.875 348.625L255.812 176H152C138.75 176 128 165.25 128 152S138.75 128 152 128H296C304.438 128 312.281 132.438 316.594 139.688Z" })
    ]
  }
));
Square7Duotone.displayName = "Square7Duotone";
var Square7_default = Square7Duotone;
