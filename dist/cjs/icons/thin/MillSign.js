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
var MillSign_exports = {};
__export(MillSign_exports, {
  default: () => MillSign_default
});
module.exports = __toCommonJS(MillSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MillSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M276.022 111.987C265.082 111.987 254.691 114.111 244.964 117.644L279.485 10.453C280.827 6.234 278.518 1.734 274.337 0.359C270.063 -0.922 265.632 1.328 264.26 5.515L224.922 127.662C210.589 137.346 199.09 150.946 192 166.936C177.681 134.64 145.471 111.987 107.978 111.987C76.411 111.987 48.546 128.019 31.974 152.356V119.988C31.974 115.581 28.386 111.987 23.987 111.987C19.588 111.987 16 115.581 16 119.988V440.279C16 444.685 19.588 448.279 23.987 448.279C28.386 448.279 31.974 444.685 31.974 440.279V204.147C31.974 162.145 66.076 127.988 107.978 127.988C149.911 127.988 184.013 162.145 184.013 204.147V254.685L104.515 501.531C103.173 505.75 105.482 510.25 109.663 511.625C110.505 511.875 111.316 512 112.128 512C115.497 512 118.648 509.844 119.74 506.468L184.013 306.9V440.279C184.013 444.685 187.601 448.279 192 448.279S199.987 444.685 199.987 440.279V257.299L238.268 138.436C249.438 131.97 262.218 127.988 276.022 127.988C317.924 127.988 352.026 162.145 352.026 204.147V440.279C352.026 444.685 355.614 448.279 360.013 448.279C364.412 448.279 368 444.685 368 440.279V204.147C368 153.332 326.753 111.987 276.022 111.987ZM199.987 204.147C199.987 187.462 205.525 172.147 214.64 159.589L199.987 205.084V204.147Z" })
  }
));
MillSignThin.displayName = "MillSignThin";
var MillSign_default = MillSignThin;
