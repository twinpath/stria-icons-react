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
const DreidelRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440.969 39.031C431.594 29.656 416.406 29.656 407.031 39.031L294.719 151.344L217.125 73.75C210.625 67.25 202 64 193.5 64C184.875 64 176.375 67.25 169.875 73.75L19.625 224C7 236.5 0 253.5 0 271.25V413.125C0 450.125 29.875 480 66.875 480H208.75C226.375 480 243.375 473 256 460.375L406.25 310.25C419.25 297.125 419.25 276 406.25 262.875L328.656 185.281L440.969 72.969C450.344 63.594 450.344 48.406 440.969 39.031ZM222.125 426.5C218.5 430.125 213.75 432 208.75 432H66.875C56.5 432 48 423.5 48 413.125V271.25C48 266.25 50 261.5 53.5 258L106.75 204.75L275.25 373.25L222.125 426.5ZM309.25 339.25L140.75 170.75L193.375 118.125L362 286.625L309.25 339.25Z" })
  }
));
DreidelRegular.displayName = "DreidelRegular";
var Dreidel_default = DreidelRegular;
