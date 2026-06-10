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
var Pager_exports = {};
__export(Pager_exports, {
  default: () => Pager_default
});
module.exports = __toCommonJS(Pager_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PagerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 64H64C28.625 64 0 92.625 0 128V384C0 419.375 28.625 448 64 448H448C483.375 448 512 419.375 512 384V128C512 92.625 483.375 64 448 64ZM496 384C496 410.467 474.467 432 448 432H64C37.533 432 16 410.467 16 384V128C16 101.533 37.533 80 64 80H448C474.467 80 496 101.533 496 128V384ZM416 128H96C78.375 128 64 142.375 64 160V224C64 241.625 78.375 256 96 256H416C433.625 256 448 241.625 448 224V160C448 142.375 433.625 128 416 128ZM432 224C432 232.822 424.822 240 416 240H96C87.178 240 80 232.822 80 224V160C80 151.178 87.178 144 96 144H416C424.822 144 432 151.178 432 160V224ZM152 320H72C67.594 320 64 323.578 64 328S67.594 336 72 336H152C156.406 336 160 332.422 160 328S156.406 320 152 320ZM280 320H200C195.594 320 192 323.578 192 328S195.594 336 200 336H280C284.406 336 288 332.422 288 328S284.406 320 280 320Z" })
  }
));
PagerThin.displayName = "PagerThin";
var Pager_default = PagerThin;
