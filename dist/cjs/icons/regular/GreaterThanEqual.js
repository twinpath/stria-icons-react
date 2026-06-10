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
var GreaterThanEqual_exports = {};
__export(GreaterThanEqual_exports, {
  default: () => GreaterThanEqual_default
});
module.exports = __toCommonJS(GreaterThanEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GreaterThanEqualRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M33.938 353.469C37.844 362.562 46.688 368 56 368C59.156 368 62.375 367.375 65.469 366.062L401.469 222.062C410.281 218.281 416 209.594 416 200S410.281 181.719 401.469 177.938L65.469 33.938C53.219 28.75 39.188 34.344 33.938 46.531C28.719 58.719 34.375 72.844 46.531 78.062L331.062 200L46.531 321.938C34.375 327.156 28.719 341.281 33.938 353.469ZM424 432H24C10.75 432 0 442.75 0 456S10.75 480 24 480H424C437.25 480 448 469.25 448 456S437.25 432 424 432Z" })
  }
));
GreaterThanEqualRegular.displayName = "GreaterThanEqualRegular";
var GreaterThanEqual_default = GreaterThanEqualRegular;
