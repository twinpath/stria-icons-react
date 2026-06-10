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
var Clarinet_exports = {};
__export(Clarinet_exports, {
  default: () => Clarinet_default
});
module.exports = __toCommonJS(Clarinet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClarinetThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M631.562 129.891C629.186 128.623 626.578 127.992 623.984 127.992C620.883 127.992 617.797 128.893 615.125 130.687L571.156 160H480V112H504C508.406 112 512 108.422 512 104S508.406 96 504 96H232C227.594 96 224 99.578 224 104S227.594 112 232 112H272V160H101.25C97.75 160 94.375 160.5 91.125 161.625L11 188.375C4.375 190.5 0 196.625 0 203.5V276.5C0 283.375 4.375 289.5 11 291.625L91.125 318.375C94.375 319.5 97.75 320 101.25 320H571.156L615.125 349.312C617.812 351.094 620.906 352 624 352C626.594 352 629.188 351.375 631.562 350.109C636.75 347.328 640 341.906 640 336V144C640 138.094 636.75 132.672 631.562 129.891ZM384 112H464V160H384V112ZM288 112H368V160H288V112ZM624 335.998L580.031 306.688L576 304H101.25C99.406 304 97.807 303.756 96.191 303.197L16 276.5L16.066 203.551L96.359 176.744C97.807 176.242 99.406 176 101.25 176H576L624 144V335.998ZM272 224C263.166 224 256 231.166 256 240C256 248.832 263.166 256 272 256S288 248.832 288 240C288 231.166 280.834 224 272 224ZM368 224C359.166 224 352 231.166 352 240C352 248.832 359.166 256 368 256S384 248.832 384 240C384 231.166 376.834 224 368 224ZM464 224C455.166 224 448 231.166 448 240C448 248.832 455.166 256 464 256S480 248.832 480 240C480 231.166 472.834 224 464 224Z" })
  }
));
ClarinetThin.displayName = "ClarinetThin";
var Clarinet_default = ClarinetThin;
