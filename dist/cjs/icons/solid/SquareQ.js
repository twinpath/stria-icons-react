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
var SquareQ_exports = {};
__export(SquareQ_exports, {
  default: () => SquareQ_default
});
module.exports = __toCommonJS(SquareQ_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareQSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 176C179.875 176 144 211.891 144 256S179.875 336 224 336C237.307 336 249.67 332.424 260.719 326.656L231.031 296.969C221.656 287.594 221.656 272.406 231.031 263.031S255.594 253.656 264.969 263.031L294.656 292.719C300.426 281.67 304 269.305 304 256C304 211.891 268.125 176 224 176ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM344.969 343.031C354.344 352.406 354.344 367.594 344.969 376.969C340.281 381.656 334.156 384 328 384S315.719 381.656 311.031 376.969L295.879 361.816C275.371 375.791 250.639 384 224 384C153.406 384 96 326.578 96 256S153.406 128 224 128S352 185.422 352 256C352 282.635 343.789 307.369 329.814 327.877L344.969 343.031Z" })
  }
));
SquareQSolid.displayName = "SquareQSolid";
var SquareQ_default = SquareQSolid;
