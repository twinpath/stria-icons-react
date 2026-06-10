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
const DreidelSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.624 223.964C7 236.466 0 253.468 0 271.221V413.116C0 450.121 29.873 480 66.87 480H208.735C226.359 480 243.358 472.999 255.982 460.372L314.853 401.489L78.495 165.081L19.624 223.964ZM443.219 59.191L420.721 36.688C414.471 30.437 404.222 30.437 398.097 36.688L289.105 145.703L217.235 73.693C204.111 60.692 182.987 60.692 169.863 73.693L101.243 142.453L337.601 378.861L406.222 310.226C419.346 297.099 419.346 275.972 406.222 262.845L334.227 190.96L443.219 81.944C449.594 75.694 449.594 65.567 443.219 59.191Z" })
  }
));
DreidelSolid.displayName = "DreidelSolid";
var Dreidel_default = DreidelSolid;
