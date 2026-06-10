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
var CircleQ_exports = {};
__export(CircleQ_exports, {
  default: () => CircleQ_default
});
module.exports = __toCommonJS(CircleQ_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleQDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM376.969 343.031C386.344 352.406 386.344 367.594 376.969 376.969C372.281 381.656 366.156 384 360 384S347.719 381.656 343.031 376.969L327.879 361.816C307.371 375.791 282.639 384 256 384C185.406 384 128 326.578 128 256S185.406 128 256 128S384 185.422 384 256C384 282.635 375.789 307.369 361.814 327.877L376.969 343.031ZM256 176C211.875 176 176 211.891 176 256S211.875 336 256 336C269.307 336 281.67 332.424 292.719 326.656L263.031 296.969C253.656 287.594 253.656 272.406 263.031 263.031S287.594 253.656 296.969 263.031L326.656 292.719C332.426 281.67 336 269.305 336 256C336 211.891 300.125 176 256 176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128C185.406 128 128 185.422 128 256S185.406 384 256 384C282.639 384 307.371 375.791 327.879 361.816L343.031 376.969C347.719 381.656 353.844 384 360 384S372.281 381.656 376.969 376.969C386.344 367.594 386.344 352.406 376.969 343.031L361.814 327.877C375.789 307.369 384 282.635 384 256C384 185.422 326.594 128 256 128ZM326.656 292.719L296.969 263.031C287.594 253.656 272.406 253.656 263.031 263.031S253.656 287.594 263.031 296.969L292.719 326.656C281.67 332.424 269.307 336 256 336C211.875 336 176 300.109 176 256S211.875 176 256 176S336 211.891 336 256C336 269.305 332.426 281.67 326.656 292.719Z" })
    ]
  }
));
CircleQDuotone.displayName = "CircleQDuotone";
var CircleQ_default = CircleQDuotone;
