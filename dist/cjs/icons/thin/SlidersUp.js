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
var SlidersUp_exports = {};
__export(SlidersUp_exports, {
  default: () => SlidersUp_default
});
module.exports = __toCommonJS(SlidersUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SlidersUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 319.986C411.578 319.986 408 323.58 408 327.986V504C408 508.406 411.578 512 416 512S424 508.406 424 504V327.986C424 323.58 420.422 319.986 416 319.986ZM448 224H424V8C424 3.594 420.422 0 416 0S408 3.594 408 8V224H384C366.326 224 352 238.326 352 256S366.326 288 384 288H448C465.672 288 480 273.674 480 256S465.672 224 448 224ZM448 272H384C375.178 272 368 264.822 368 256S375.178 240 384 240H448C456.822 240 464 247.178 464 256S456.822 272 448 272ZM96 191.986C91.578 191.986 88 195.58 88 199.986V504C88 508.406 91.578 512 96 512S104 508.406 104 504V199.986C104 195.58 100.422 191.986 96 191.986ZM128 96H104V8C104 3.594 100.422 0 96 0S88 3.594 88 8V96H64C46.326 96 32 110.326 32 128S46.326 160 64 160H128C145.672 160 160 145.674 160 128S145.672 96 128 96ZM128 144H64C55.178 144 48 136.822 48 128S55.178 112 64 112H128C136.822 112 144 119.178 144 128S136.822 144 128 144ZM288 320.014H263.994C263.994 320.008 264 320.006 264 320V8C264 3.594 260.422 0 256 0S248 3.594 248 8V320C248 320.006 248.006 320.008 248.006 320.014H224C206.326 320.014 192 334.34 192 352.014S206.326 384.014 224 384.014H288C305.672 384.014 320 369.687 320 352.014S305.672 320.014 288 320.014ZM288 368.014H224C215.178 368.014 208 360.836 208 352.014S215.178 336.014 224 336.014H288C296.822 336.014 304 343.191 304 352.014S296.822 368.014 288 368.014ZM256 416C251.578 416 248 419.594 248 424V504C248 508.406 251.578 512 256 512S264 508.406 264 504V424C264 419.594 260.422 416 256 416Z" })
  }
));
SlidersUpThin.displayName = "SlidersUpThin";
var SlidersUp_default = SlidersUpThin;
