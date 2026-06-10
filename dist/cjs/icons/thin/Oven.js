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
var Oven_exports = {};
__export(Oven_exports, {
  default: () => Oven_default
});
module.exports = __toCommonJS(Oven_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OvenThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 80C71.166 80 64 87.166 64 96S71.166 112 80 112S96 104.834 96 96S88.834 80 80 80ZM96 448H352C369.674 448 384 433.674 384 416V256C384 238.326 369.674 224 352 224H96C78.328 224 64 238.326 64 256V416C64 433.674 78.328 448 96 448ZM80 256C80 247.178 87.178 240 96 240H352C360.822 240 368 247.178 368 256V416C368 424.822 360.822 432 352 432H96C87.178 432 80 424.822 80 416V256ZM368 80C359.166 80 352 87.166 352 96S359.166 112 368 112S384 104.834 384 96S376.834 80 368 80ZM176 80C167.166 80 160 87.166 160 96S167.166 112 176 112S192 104.834 192 96S184.834 80 176 80ZM384 0H64C28.625 0 0 28.625 0 64V448C0 483.199 28.801 512 64 512H384C419.199 512 448 483.199 448 448V64C448 28.625 419.375 0 384 0ZM432 448C432 474.467 410.467 496 384 496H64C37.533 496 16 474.467 16 448V176H432V448ZM432 160H16V64C16 37.533 37.533 16 64 16H384C410.467 16 432 37.533 432 64V160ZM272 80C263.166 80 256 87.166 256 96S263.166 112 272 112S288 104.834 288 96S280.834 80 272 80ZM120 304H328C332.406 304 336 300.422 336 296S332.406 288 328 288H120C115.594 288 112 291.578 112 296S115.594 304 120 304Z" })
  }
));
OvenThin.displayName = "OvenThin";
var Oven_default = OvenThin;
