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
var InputText_exports = {};
__export(InputText_exports, {
  default: () => InputText_default
});
module.exports = __toCommonJS(InputText_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InputTextThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576.002 64H63.998C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 63.998 448H576.002C611.346 448 640 419.348 640 384V128C640 92.654 611.346 64 576.002 64ZM624 384C624 410.467 602.469 432 576.002 432H63.998C37.531 432 16 410.467 16 384V128C16 101.533 37.531 80 63.998 80H576.002C602.469 80 624 101.533 624 128V384ZM392.781 251.031C402.156 242.266 408 229.797 408 216C408 189.531 386.469 168 360 168H304C299.594 168 296 171.578 296 176V336C296 340.406 299.594 344 304 344H376C402.469 344 424 322.469 424 296C424 275.438 411 257.844 392.781 251.031ZM312 184H360C377.656 184 392 198.359 392 216S377.656 248 360 248H312V184ZM376 328H312V264H376C393.656 264 408 278.359 408 296C408 313.656 393.656 328 376 328ZM168.562 173.031L104.562 333.031C102.938 337.125 104.938 341.781 109.031 343.438C113.125 345.031 117.812 343.094 119.437 338.969L136.623 296H215.377L232.562 338.969C233.812 342.094 236.812 344 240 344C241 344 242 343.812 242.969 343.438C247.062 341.781 249.062 337.125 247.437 333.031L183.437 173.031C181 166.938 171 166.938 168.562 173.031ZM143.021 280L176 197.547L208.979 280H143.021Z" })
  }
));
InputTextThin.displayName = "InputTextThin";
var InputText_default = InputTextThin;
