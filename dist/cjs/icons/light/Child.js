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
var Child_exports = {};
__export(Child_exports, {
  default: () => Child_default
});
module.exports = __toCommonJS(Child_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChildLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.003 144C263.753 144 296.003 111.75 296.003 72S263.753 -0.002 224.003 -0.002S152.003 32.25 152.003 72S184.253 144 224.003 144ZM224.003 32C246.059 32 264.003 49.943 264.003 72S246.059 112 224.003 112C201.948 112 184.003 94.057 184.003 72S201.948 32 224.003 32ZM408.284 114.359C400.768 109.813 390.925 112.188 386.331 119.703C384.518 122.656 340.581 192 224.003 192C107.612 192 63.643 122.875 61.69 119.719C57.143 112.172 47.346 109.734 39.768 114.281S29.737 128.656 34.284 136.234C35.948 138.994 67.522 189.615 144.003 212.656V496C144.003 504.844 151.159 512 160.003 512S176.003 504.844 176.003 496V368H272.003V496C272.003 504.844 279.159 512 288.003 512S304.003 504.844 304.003 496V212.656C380.483 189.615 412.057 138.994 413.721 136.234C418.253 128.688 415.815 118.922 408.284 114.359ZM272.003 336H176.003V220.166C190.694 222.584 206.641 224 224.003 224S257.311 222.584 272.003 220.166V336Z" })
  }
));
ChildLight.displayName = "ChildLight";
var Child_default = ChildLight;
