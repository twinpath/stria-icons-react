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
const PassportLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 384H112C103.25 384 96 391.25 96 400S103.25 416 112 416H336C344.75 416 352 408.75 352 400S344.75 384 336 384ZM224 64C153.25 64 96 121.25 96 192S153.25 320 224 320S352 262.75 352 192S294.75 64 224 64ZM129.625 208H168.75C170.25 235 175.25 259.375 182.875 278.375C155.25 265.125 134.875 239.25 129.625 208ZM168.75 176H129.625C134.875 144.75 155.25 118.875 182.875 105.625C175.25 124.625 170.25 149 168.75 176ZM224 286.75C216.25 279.25 203.25 252.25 200.625 208H247.375C244.75 252.25 231.75 279.25 224 286.75ZM200.5 176C203.25 131.75 216.25 104.75 224 97.25C231.75 104.75 244.75 131.75 247.375 176H200.5ZM265.125 278.375C272.75 259.375 277.75 235 279.25 208H318.375C313.125 239.25 292.75 265.125 265.125 278.375ZM279.25 176C277.75 149 272.75 124.625 265.125 105.625C292.75 118.875 313.125 144.75 318.375 176H279.25ZM384 0H64C28.654 0 0 28.652 0 64V448C0 483.344 28.654 512 64 512H384C419.199 512 448 483.199 448 448V64C448 28.797 419.199 0 384 0ZM416 448C416 465.672 401.674 480 384 480H64C46.4 480 32 465.602 32 448V64C32 46.398 46.4 32 64 32H384C401.674 32 416 46.328 416 64V448Z" })
  }
));
PassportLight.displayName = "PassportLight";
var Passport_default = PassportLight;
