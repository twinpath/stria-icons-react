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
var CircleDownRight_exports = {};
__export(CircleDownRight_exports, {
  default: () => CircleDownRight_default
});
module.exports = __toCommonJS(CircleDownRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDownRightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 256C496 123.42 388.58 16 256 16S16 123.42 16 256C16 388.582 123.42 496 256 496S496 388.582 496 256ZM173.335 352.631C170.849 346.653 172.23 339.77 176.804 335.196L222.059 289.941L154.177 222.059C141.68 209.562 141.68 189.301 154.177 176.804L176.804 154.177C189.301 141.68 209.562 141.68 222.059 154.177L289.941 222.059L335.196 176.804C339.77 172.23 346.653 170.849 352.631 173.335C358.619 175.81 362.508 181.643 362.508 188.118V346.51C362.508 355.345 355.345 362.508 346.51 362.508H188.118C181.643 362.508 175.81 358.619 173.335 352.631Z" })
  }
));
CircleDownRightSolid.displayName = "CircleDownRightSolid";
var CircleDownRight_default = CircleDownRightSolid;
