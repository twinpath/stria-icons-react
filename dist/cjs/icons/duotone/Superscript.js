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
var Superscript_exports = {};
__export(Superscript_exports, {
  default: () => Superscript_default
});
module.exports = __toCommonJS(Superscript_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SuperscriptDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 408C352 430.094 334.094 448 312 448H281.781C268.688 448 256.422 441.594 248.953 430.844L176 326.016L103.047 430.844C95.578 441.594 83.312 448 70.219 448H40C17.906 448 0 430.094 0 408S17.906 368 40 368H49.328L127.273 256L49.328 144H40C17.906 144 0 126.094 0 104S17.906 64 40 64H70.219C83.312 64 95.578 70.406 103.047 81.156L176 185.984L248.953 81.156C256.422 70.406 268.688 64 281.781 64H312C334.094 64 352 81.906 352 104S334.094 144 312 144H302.672L224.727 256L302.672 368H312C334.094 368 352 385.906 352 408Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 192C512 209.688 497.672 224 480 224H416C398.328 224 384 209.688 384 192S398.328 160 416 160H416.281V84.688C405.797 84.688 395.531 79.531 389.406 70.063C379.812 55.219 384.062 35.406 398.906 25.813L430.906 5.125C440.781 -1.25 453.266 -1.75 463.578 3.906C473.875 9.5 480.281 20.281 480.281 32V160.057C497.814 160.217 512 174.412 512 192Z" })
    ]
  }
));
SuperscriptDuotone.displayName = "SuperscriptDuotone";
var Superscript_default = SuperscriptDuotone;
