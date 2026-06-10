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
var MoneyBills_exports = {};
__export(MoneyBills_exports, {
  default: () => MoneyBills_default
});
module.exports = __toCommonJS(MoneyBills_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyBillsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80.002 432H544.014C544.014 458.508 522.523 480 496.012 480H64.002C28.654 480 0 451.344 0 416V144C0 117.492 21.49 96 48.002 96V400C48.002 417.672 62.328 432 80.002 432ZM367.994 112C323.809 112 287.992 154.98 287.992 208S323.809 304 367.994 304C412.178 304 447.996 261.02 447.996 208S412.178 112 367.994 112ZM640 96V320C640 355.346 611.348 384 576 384H160.002C124.656 384 96.002 355.346 96.002 320V96C96.002 60.652 124.656 32 160.002 32H576C611.348 32 640 60.652 640 96ZM592 272.824V143.176C589.363 143.559 586.744 144 584 144C553.072 144 528 118.928 528 88C528 85.238 528.547 82.641 528.955 80H207.047C207.455 82.641 208 85.238 208 88C208 118.928 182.928 144 152 144C149.258 144 146.637 143.559 144.002 143.176V272.824C146.637 272.441 149.258 272 152 272C182.928 272 208 297.072 208 328C208 330.762 207.455 333.359 207.047 336H528.955C528.547 333.359 528 330.762 528 328C528 297.072 553.072 272 584 272C586.744 272 589.363 272.441 592 272.824Z" })
  }
));
MoneyBillsRegular.displayName = "MoneyBillsRegular";
var MoneyBills_default = MoneyBillsRegular;
