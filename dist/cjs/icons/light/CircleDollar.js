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
var CircleDollar_exports = {};
__export(CircleDollar_exports, {
  default: () => CircleDollar_default
});
module.exports = __toCommonJS(CircleDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDollarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM260.359 240.578L252.016 238.172C214.688 227.203 205.344 219.078 208.578 200.391C212.641 177.016 244.156 173.391 269.844 177.437C277.391 178.609 286.844 181.203 298.766 185.328C307.109 188.187 316.219 183.766 319.125 175.437C322.016 167.094 317.578 157.969 309.234 155.078C295.313 150.266 284.375 147.328 274.797 145.812C273.834 145.66 272.955 145.682 272 145.549V112C272 103.156 264.844 96 256 96S240 103.156 240 112V144.705C205.953 148.223 181.98 166.41 177.047 194.938C168.078 246.844 216.812 261.172 243 268.875L251.562 271.344C294.297 283.562 307.031 290.719 303.422 311.609C299.359 335.016 267.781 338.578 242.062 334.547C230.297 332.781 216.281 327.734 203.906 323.266L197.344 320.922C189 317.938 179.875 322.344 176.922 330.656C173.969 338.984 178.328 348.125 186.656 351.078L193.062 353.375C206.812 358.328 222.406 363.953 237.203 366.187C238.174 366.34 239.039 366.281 240 366.414V400C240 408.844 247.156 416 256 416S272 408.844 272 400V367.258C306.027 363.727 330.02 345.592 334.953 317.062C344.031 264.5 295.672 250.672 260.359 240.578Z" })
  }
));
CircleDollarLight.displayName = "CircleDollarLight";
var CircleDollar_default = CircleDollarLight;
