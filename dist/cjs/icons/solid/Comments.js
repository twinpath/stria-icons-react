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
var Comments_exports = {};
__export(Comments_exports, {
  default: () => Comments_default
});
module.exports = __toCommonJS(Comments_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentsSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 176C416 78.797 322.875 0 208 0S0 78.797 0 176C0 215.57 15.621 251.963 41.672 281.359C25.285 314.123 2.443 338.68 2.082 339.041C-0.018 341.246 -0.588 344.516 0.641 347.395C1.9 350.275 4.602 352 7.66 352C46.006 352 78.418 340.879 103.402 327.955C134.156 343.146 169.818 352 208 352C322.875 352 416 273.201 416 176ZM599.594 443.736C624.828 413.945 640 376.635 640 336C640 238.797 554.039 160 448 160C447.686 160 447.381 160.041 447.066 160.043C447.533 165.328 448 170.613 448 176C448 274.617 368.32 357.248 261.879 378.523C282.658 455.143 357.986 512 448 512C481.693 512 513.322 503.992 540.848 490.018C565.244 502.02 596.086 512 632.34 512C635.398 512 638.1 510.275 639.359 507.395C640.588 504.516 640.018 501.246 637.918 499.041C637.566 498.689 615.867 475.266 599.594 443.736Z" })
  }
));
CommentsSolid.displayName = "CommentsSolid";
var Comments_default = CommentsSolid;
