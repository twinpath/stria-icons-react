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
const CommentsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 176C416 78.797 322.875 0 208 0S0 78.797 0 176C0 217.627 17.176 255.812 45.729 285.947C29.385 317.377 7.26 341.516 6.739 341.906C-0.007 349.057 -1.896 359.715 2.018 368.889C5.93 378.062 14.969 384 24.952 384C79.129 384 123.268 364.764 153.942 345.783C171.207 349.711 189.268 352 208 352C322.875 352 416 273.201 416 176ZM208 304C193.84 304 179.235 302.311 164.59 298.979L145.411 294.617L128.686 304.965C111.686 315.484 94.262 323.355 76.547 328.537C80.731 321.869 84.739 314.971 88.315 308.092L104.09 277.754L80.573 252.934C65.713 237.25 48 211.174 48 176C48 105.42 119.776 48 208 48S368 105.42 368 176S296.225 304 208 304ZM599.594 443.736C624.828 413.945 640 376.635 640 336C640 238.797 554.039 160 448 160C447.686 160 447.381 160.041 447.067 160.043C447.534 165.328 448 170.613 448 176C448 274.617 368.321 357.248 261.879 378.523C282.659 455.143 357.987 512 448 512C481.694 512 513.323 503.992 540.848 490.018C565.244 502.02 596.086 512 632.34 512C635.399 512 638.1 510.275 639.36 507.395C640.588 504.516 640.018 501.246 637.918 499.041C637.567 498.689 615.868 475.266 599.594 443.736Z" })
  }
));
CommentsRegular.displayName = "CommentsRegular";
var Comments_default = CommentsRegular;
