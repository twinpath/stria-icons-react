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
var Bacon_exports = {};
__export(Bacon_exports, {
  default: () => Bacon_default
});
module.exports = __toCommonJS(Bacon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BaconSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M29.344 432.453L11.28 412.307C1.873 401.836 -1.97 387.004 0.967 372.658C3.78 358.951 12.202 347.918 24.061 342.432L92.936 310.488C140.89 288.234 180.578 250.287 207.687 200.73L228.343 162.973C257.109 110.383 299.328 70.047 350.453 46.354L443.204 3.359C458.048 -3.453 475.61 0.281 486.892 12.877L520.976 50.889L416.221 99.453C360.502 125.281 314.486 169.187 283.174 226.453L261.252 266.531C233.22 317.75 192.251 356.953 142.767 379.906L29.344 432.453ZM564.72 99.678L543.318 75.807L429.69 128.484C380.221 151.422 339.252 190.594 311.236 241.812L289.314 281.891C257.986 339.156 211.97 383.094 156.22 408.937L51.68 457.363L89.108 499.107C96.64 507.516 106.999 512 117.468 512C122.655 512 127.874 510.891 132.796 508.625L225.547 465.631C276.672 441.937 318.891 401.602 347.657 349.012L368.313 311.254C395.422 261.697 435.11 223.75 483.064 201.496L551.939 169.553C563.798 164.066 572.22 153.033 575.033 139.326C577.97 124.98 574.127 110.148 564.72 99.678Z" })
  }
));
BaconSolid.displayName = "BaconSolid";
var Bacon_default = BaconSolid;
