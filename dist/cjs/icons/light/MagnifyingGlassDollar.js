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
const MagnifyingGlassDollarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M212.328 192.562L205.438 190.594C171.766 180.688 169.047 174 171.109 162.094C173.938 145.625 197.266 141.719 219.172 145.188C227.203 146.406 236.484 149.438 242.766 151.625C251.094 154.438 260.219 150.063 263.125 141.719C266.016 133.375 261.578 124.281 253.234 121.375C241.359 117.281 232.078 114.781 224.078 113.562C224.051 113.559 224.027 113.559 224 113.555V96C224 87.156 216.844 80 208 80S192 87.156 192 96V112.914C163.721 116.57 143.803 132.289 139.578 156.656C131.688 202.281 175.406 215.125 196.422 221.281L203.531 223.344C240.094 233.781 247.438 239.219 244.891 253.906C242.062 270.375 218.766 274.25 196.75 270.812C187.094 269.344 175.422 265.125 165.109 261.406L160.047 259.594C151.609 256.469 142.562 260.969 139.594 269.281C136.641 277.625 140.984 286.75 149.297 289.719L154.234 291.5C165.938 295.75 179.219 300.531 191.906 302.438C191.939 302.445 191.967 302.438 192 302.445V320C192 328.844 199.156 336 208 336S224 328.844 224 320V303.195C252.348 299.57 272.205 283.742 276.422 259.344C284.406 213.188 241.031 200.781 212.328 192.562ZM507.312 484.688L365.85 343.227C397.041 306.848 416 259.676 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C259.676 416 306.848 397.039 343.225 365.852L484.687 507.312C487.812 510.438 491.906 512 496 512S504.188 510.438 507.312 507.312C513.562 501.062 513.562 490.938 507.312 484.688ZM208 384C110.953 384 32 305.047 32 208S110.953 32 208 32S384 110.953 384 208S305.047 384 208 384Z" })
  }
));
MagnifyingGlassDollarLight.displayName = "MagnifyingGlassDollarLight";
var MagnifyingGlassDollar_default = MagnifyingGlassDollarLight;
