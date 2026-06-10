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
var ThumbsDown_exports = {};
__export(ThumbsDown_exports, {
  default: () => ThumbsDown_default
});
module.exports = __toCommonJS(ThumbsDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ThumbsDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M467.275 240.239C475.107 231.702 480 220.423 480 207.923C480 184.453 463.131 164.998 440.861 160.836C445.303 153.562 448 145.103 448 135.955C448 114.63 434 96.772 414.754 90.525C415.52 87.122 416 83.614 416 79.979C416 53.475 394.516 32 368 32H309.309C274.702 32 241.027 43.221 213.336 63.98L179.198 89.573C167.113 98.632 160 112.854 160 127.958V287.888C160 287.888 160.191 288.079 160.215 288.103C160.285 302.097 166.23 315.94 178.016 325.356L194.312 338.382C276.176 403.852 239.411 480 302.54 480C333.495 480 352.005 455.477 352.005 431.89C352.005 416.743 340.25 373.774 317.482 335.867H464C490.516 335.867 512 314.392 512 287.888C512 262.505 492.234 241.949 467.275 240.239Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 32H32C14.326 32 0 46.326 0 64V288C0 305.672 14.326 320 32 320H96C113.674 320 128 305.672 128 288V64C128 46.326 113.674 32 96 32Z" })
    ]
  }
));
ThumbsDownDuotone.displayName = "ThumbsDownDuotone";
var ThumbsDown_default = ThumbsDownDuotone;
