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
var LaptopCode_exports = {};
__export(LaptopCode_exports, {
  default: () => LaptopCode_default
});
module.exports = __toCommonJS(LaptopCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LaptopCodeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 96H512V352H576V80C576 53.625 554.375 32 528 32H112C85.625 32 64 53.625 64 80V352H128V96ZM624 384H16C7.25 384 0 391.25 0 400V416C0 451.25 28.75 480 64 480H576C611.25 480 640 451.25 640 416V400C640 391.25 632.75 384 624 384ZM365.859 286.164C369.766 290.07 374.875 292.008 380 292.008S390.234 290.07 394.141 286.164L442.141 238.164C449.953 230.352 449.953 217.664 442.141 209.852L394.141 161.851C386.328 154.039 373.672 154.039 365.859 161.851C358.047 169.664 358.047 182.351 365.859 190.164L399.719 224.008L365.859 257.852C358.047 265.664 358.047 278.352 365.859 286.164ZM274.141 161.851C266.328 154.039 253.672 154.039 245.859 161.851L197.859 209.852C190.047 217.664 190.047 230.352 197.859 238.164L245.859 286.164C249.766 290.07 254.875 292.008 260 292.008S270.234 290.07 274.141 286.164C281.953 278.352 281.953 265.664 274.141 257.852L240.281 224.008L274.141 190.164C281.953 182.351 281.953 169.664 274.141 161.851Z" })
  }
));
LaptopCodeSolid.displayName = "LaptopCodeSolid";
var LaptopCode_default = LaptopCodeSolid;
