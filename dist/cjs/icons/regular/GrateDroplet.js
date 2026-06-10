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
var GrateDroplet_exports = {};
__export(GrateDroplet_exports, {
  default: () => GrateDroplet_default
});
module.exports = __toCommonJS(GrateDroplet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GrateDropletRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M414.773 198.076C419.771 181.535 432.318 169.156 448 164.074V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H343.396C328.723 457.549 320 430.895 320 402.172C320 370.494 330.48 345.719 344 323.412V280H373.445C389 257.586 404.201 233.088 414.773 198.076ZM104 432H64C55.178 432 48 424.822 48 416V280H104V432ZM104 232H48V96C48 87.178 55.178 80 64 80H104V232ZM200 432H152V280H200V432ZM200 232H152V80H200V232ZM296 432H248V280H296V432ZM296 232H248V80H296V232ZM344 80H384C392.822 80 400 87.178 400 96V232H344V80ZM482.594 205.83C477.562 187.783 451.094 187.002 445.406 205.83C415.656 304.344 352 331.219 352 400.672C352 462.156 402.094 512 464 512S576 462.156 576 400.672C576 330.828 512.49 304.891 482.594 205.83Z" })
  }
));
GrateDropletRegular.displayName = "GrateDropletRegular";
var GrateDroplet_default = GrateDropletRegular;
