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
var Dreidel_exports = {};
__export(Dreidel_exports, {
  default: () => Dreidel_default
});
module.exports = __toCommonJS(Dreidel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DreidelLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M443.313 36.688C437.063 30.438 426.938 30.438 420.688 36.688L300.802 156.578L217.492 73.375C210.993 66.875 202.368 63.625 193.868 63.625C185.369 63.625 176.744 66.875 170.244 73.375L19.624 224C7 236.5 0 253.5 0 271.25V413.125C0 450.125 29.874 480 66.873 480H208.743C226.367 480 243.367 473 255.991 460.375L406.736 309.75C419.735 296.625 419.735 275.5 406.736 262.375L323.442 179.188L443.313 59.312C449.562 53.062 449.562 42.938 443.313 36.688ZM233.367 437.75C226.742 444.375 218.117 448 208.743 448H66.873C47.623 448 31.999 432.375 31.999 413.125V271.25C31.999 262 35.624 253.25 42.249 246.625L101.621 187.25L292.74 378.375L233.367 437.75ZM383.987 287.125L315.239 355.75L124.246 164.625L192.868 96C192.993 95.875 193.243 95.625 193.868 95.625L194.868 96L383.987 285.125C384.612 285.625 384.612 286.625 383.987 287.125Z" })
  }
));
DreidelLight.displayName = "DreidelLight";
var Dreidel_default = DreidelLight;
