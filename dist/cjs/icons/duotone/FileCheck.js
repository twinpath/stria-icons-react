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
var FileCheck_exports = {};
__export(FileCheck_exports, {
  default: () => FileCheck_default
});
module.exports = __toCommonJS(FileCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileCheckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM282.219 295.609L186.219 407.609C181.875 412.672 175.594 415.703 168.906 415.953C168.625 415.984 168.312 415.984 168 415.984C161.656 415.984 155.531 413.453 151.031 408.953L103.031 360.953C93.656 351.578 93.656 336.391 103.031 327.016S127.594 317.641 136.969 327.016L166.656 356.703L245.781 264.359C254.438 254.297 269.594 253.172 279.625 261.766C289.688 270.391 290.844 285.547 282.219 295.609Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0V128H384L256 0ZM245.781 264.359L166.656 356.703L136.968 327.016C127.593 317.641 112.406 317.641 103.031 327.016S93.656 351.578 103.031 360.953L151.031 408.953C155.531 413.453 161.656 415.984 168 415.984C168.312 415.984 168.625 415.984 168.906 415.953C175.593 415.703 181.875 412.672 186.218 407.609L282.218 295.609C290.843 285.547 289.687 270.391 279.625 261.766C269.593 253.172 254.437 254.297 245.781 264.359Z" })
    ]
  }
));
FileCheckDuotone.displayName = "FileCheckDuotone";
var FileCheck_default = FileCheckDuotone;
