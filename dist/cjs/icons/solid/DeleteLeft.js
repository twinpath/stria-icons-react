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
var DeleteLeft_exports = {};
__export(DeleteLeft_exports, {
  default: () => DeleteLeft_default
});
module.exports = __toCommonJS(DeleteLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DeleteLeftSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 64H205.25C188.25 64 172 70.75 160 82.75L9.375 233.375C-3.125 245.875 -3.125 266.125 9.375 278.625L160 429.25C172 441.25 188.25 448 205.25 448H512C547.375 448 576 419.375 576 384V128C576 92.625 547.375 64 512 64ZM432.969 303.029C442.344 312.404 442.344 327.592 432.969 336.967C423.588 346.348 408.404 346.34 399.031 336.967L352 289.936L304.969 336.967C295.588 346.348 280.404 346.34 271.031 336.967C261.656 327.592 261.656 312.404 271.031 303.029L318.062 255.998L271.031 208.969C261.656 199.594 261.656 184.406 271.031 175.031S295.594 165.656 304.969 175.031L352 222.062L399.031 175.031C408.406 165.656 423.594 165.656 432.969 175.031S442.344 199.594 432.969 208.969L385.937 255.998L432.969 303.029Z" })
  }
));
DeleteLeftSolid.displayName = "DeleteLeftSolid";
var DeleteLeft_default = DeleteLeftSolid;
