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
var AtomSimple_exports = {};
__export(AtomSimple_exports, {
  default: () => AtomSimple_default
});
module.exports = __toCommonJS(AtomSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AtomSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M397.841 255.895C451.466 339.264 464.591 417.133 424.966 456.63C363.841 517.626 242.216 441.381 223.966 429.632C205.841 441.256 83.966 517.626 22.966 456.63C-16.534 417.133 -3.534 339.264 50.091 255.895C-3.534 172.401 -16.534 94.657 22.966 55.035C62.591 15.537 140.466 28.536 223.966 82.158C307.466 28.536 385.341 15.412 424.966 55.035S451.466 172.401 397.841 255.895ZM80.716 213.273C110.216 176.026 144.091 142.278 181.466 112.655C139.591 88.657 79.341 66.784 56.966 89.032C40.216 105.781 46.341 153.652 80.716 213.273ZM181.466 398.885C144.091 369.512 110.216 335.764 80.716 298.392C46.341 358.013 40.216 406.009 56.966 422.633C73.716 439.382 121.716 433.257 181.466 398.885ZM338.966 255.895C306.466 211.898 267.716 173.026 223.966 140.528C180.091 173.026 141.341 211.898 108.966 255.895C142.966 301.517 178.966 337.264 223.966 370.637C269.341 337.014 305.216 301.142 338.966 255.895ZM255.966 255.895C255.966 273.519 241.716 287.893 223.966 287.893C206.216 287.893 191.966 273.519 191.966 255.895C191.966 238.146 206.216 223.772 223.966 223.772C241.716 223.772 255.966 238.146 255.966 255.895ZM367.216 298.392C337.716 335.764 303.841 369.512 266.466 398.885C326.216 433.257 374.216 439.382 390.966 422.633C407.716 406.009 401.591 358.013 367.216 298.392ZM266.466 112.655C303.841 142.153 337.716 176.026 367.216 213.273C401.591 153.652 407.716 105.781 390.966 89.032C368.716 66.784 308.591 88.532 266.466 112.655Z" })
  }
));
AtomSimpleRegular.displayName = "AtomSimpleRegular";
var AtomSimple_default = AtomSimpleRegular;
