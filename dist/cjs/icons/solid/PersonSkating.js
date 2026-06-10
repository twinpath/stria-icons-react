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
var PersonSkating_exports = {};
__export(PersonSkating_exports, {
  default: () => PersonSkating_default
});
module.exports = __toCommonJS(PersonSkating_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSkatingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M399.993 0C373.49 0 351.987 21.5 351.987 48S373.49 96 399.993 96C426.497 96 448 74.5 448 48S426.497 0 399.993 0ZM399.993 448C391.242 448 383.991 455.25 383.991 464S376.74 480 367.989 480H271.975C263.224 480 255.973 487.25 255.973 496S263.224 512 271.975 512H367.989C394.493 512 415.996 490.5 415.996 464C415.996 455.25 408.745 448 399.993 448ZM117.704 456.625C111.578 462.75 101.327 462.875 95.201 456.625L27.191 388.75C21.065 382.5 10.814 382.5 4.688 388.75C-1.563 394.875 -1.563 405.125 4.688 411.25L72.573 479.25C81.949 488.625 94.201 493.25 106.577 493.25C118.829 493.25 131.206 488.5 140.457 479.25C146.708 473 146.708 462.75 140.457 456.625C134.206 450.375 124.08 450.25 117.704 456.625ZM173.837 276.75L80.199 370.5C67.697 383 67.697 403.25 80.199 415.75C86.325 421.875 94.576 425.125 102.702 425.125C110.953 425.125 119.204 422 125.33 415.75L217.218 323.75L187.089 293.625C182.088 288.625 177.712 282.875 173.837 276.75ZM127.955 160H233.47L213.342 177.25C199.84 188.75 191.714 205.625 191.089 223.25C190.339 241.125 197.215 258.5 209.717 271L287.978 349.25V432C287.978 449.75 302.23 464 319.982 464S351.987 449.75 351.987 432V342.625C351.987 330 346.861 317.625 337.86 308.75L276.851 247.75C277.351 247.25 278.101 247.125 278.601 246.625L360.863 164.25C372.364 152.75 375.74 135.75 369.614 120.75C363.363 105.75 348.861 96 332.609 96H127.955C110.203 96 95.951 110.25 95.951 128S110.203 160 127.955 160Z" })
  }
));
PersonSkatingSolid.displayName = "PersonSkatingSolid";
var PersonSkating_default = PersonSkatingSolid;
