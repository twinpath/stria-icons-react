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
var MagnifyingGlassDollar_exports = {};
__export(MagnifyingGlassDollar_exports, {
  default: () => MagnifyingGlassDollar_default
});
module.exports = __toCommonJS(MagnifyingGlassDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MagnifyingGlassDollarRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.969 471.031L370.959 337.023C399.084 301.547 416 256.785 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C256.785 416 301.549 399.086 337.021 370.961L471.031 504.969C475.719 509.656 481.859 512 488 512S500.281 509.656 504.969 504.969C514.344 495.594 514.344 480.406 504.969 471.031ZM208 368C119.775 368 48 296.223 48 208S119.775 48 208 48S368 119.777 368 208S296.225 368 208 368ZM213.453 188.719L207.453 187C180.031 178.969 180.75 174.781 181.75 168.969C183.453 159.187 200.719 156.562 216.828 159.156C221.797 159.906 228.188 161.656 236.344 164.5C246.781 168.094 258.172 162.562 261.797 152.156C265.422 141.719 259.891 130.312 249.469 126.688C241.057 123.766 234.252 121.969 228 120.695V112C228 100.969 219.047 92 208 92S188 100.969 188 112V120.043C163.469 124.789 146.229 139.641 142.344 162.156C134.516 207.312 177.75 219.969 196.188 225.375L202.453 227.188C234.656 236.406 235.469 239.938 234.25 247.031C232.547 256.812 215.312 259.344 199.078 256.844C191.422 255.688 181.734 252.219 173.172 249.125L168.109 247.312C157.609 243.688 146.234 249.094 142.594 259.531C138.922 269.938 144.391 281.375 154.797 285.062L159.641 286.781C168.428 289.93 178.23 293.172 188 295.188V304C188 315.031 196.953 324 208 324S228 315.031 228 304V296.051C252.553 291.32 269.766 276.375 273.656 253.844C281.547 208.219 238.922 196.031 213.453 188.719Z" })
  }
));
MagnifyingGlassDollarRegular.displayName = "MagnifyingGlassDollarRegular";
var MagnifyingGlassDollar_default = MagnifyingGlassDollarRegular;
