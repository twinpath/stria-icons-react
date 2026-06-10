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
var Passport_exports = {};
__export(Passport_exports, {
  default: () => Passport_default
});
module.exports = __toCommonJS(Passport_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PassportSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M129.625 208C134.875 239.25 155.25 265.125 182.875 278.375C175.25 259.375 170.25 235 168.75 208H129.625ZM129.625 176H168.75C170.25 149 175.25 124.625 182.875 105.625C155.25 118.875 134.875 144.75 129.625 176ZM224 286.75C231.75 279.25 244.75 252.25 247.375 208H200.5C203.25 252.25 216.25 279.25 224 286.75ZM265.125 105.625C272.75 124.625 277.75 149 279.25 176H318.375C313.125 144.75 292.75 118.875 265.125 105.625ZM384 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H384C419.199 512 448 483.199 448 448V64C448 28.801 419.199 0 384 0ZM336 416H112C103.25 416 96 408.75 96 400S103.25 384 112 384H336C344.75 384 352 391.25 352 400S344.75 416 336 416ZM224 320C153.25 320 96 262.75 96 192S153.25 64 224 64S352 121.25 352 192S294.75 320 224 320ZM265.125 278.375C292.75 265.125 313.125 239.25 318.375 208H279.25C277.75 235 272.75 259.375 265.125 278.375ZM200.625 176H247.5C244.75 131.75 231.75 104.75 224 97.25C216.25 104.75 203.25 131.75 200.625 176Z" })
  }
));
PassportSolid.displayName = "PassportSolid";
var Passport_default = PassportSolid;
