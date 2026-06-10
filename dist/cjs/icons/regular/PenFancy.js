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
var PenFancy_exports = {};
__export(PenFancy_exports, {
  default: () => PenFancy_default
});
module.exports = __toCommonJS(PenFancy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenFancyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424.845 0C401.345 0 377.97 9.625 361.095 28.75L169.845 240L84.082 268.629C73.937 272.016 65.978 279.979 62.595 290.125L1.998 460.803C-2.662 474.779 0.976 490.189 11.394 500.607C18.806 508.02 28.748 512 38.902 512C43.019 512 47.171 511.346 51.203 510L221.726 449.373C231.875 445.988 239.838 438.023 243.22 427.875L271.845 342L483.095 150.75C544.47 96.375 500.095 0 424.845 0ZM199.845 406.209L88.998 445.627L134.855 399.77C135.255 399.789 135.593 400 136 400C149.255 400 160 389.254 160 376C160 362.744 149.255 352 136 352C122.746 352 112 362.744 112 376C112 376.406 112.211 376.744 112.23 377.145L66.339 423.035L105.755 311.998L185.045 285.529L186.955 284.893L226.953 324.891L226.308 326.82L199.845 406.209ZM450.88 115.166L258.904 288.967L222.879 252.941L397.088 60.508C404.205 52.441 414.062 48 424.845 48C444.347 48 456.711 62.35 461.371 74.639C464.681 83.369 467.771 100.199 450.88 115.166Z" })
  }
));
PenFancyRegular.displayName = "PenFancyRegular";
var PenFancy_default = PenFancyRegular;
