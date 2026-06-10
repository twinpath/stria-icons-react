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
var BoxDollar_exports = {};
__export(BoxDollar_exports, {
  default: () => BoxDollar_default
});
module.exports = __toCommonJS(BoxDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxDollarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M214.828 367.062C207 365.953 197.375 362.641 188.906 359.734L184.328 358.172C175.938 355.312 166.875 359.828 164.047 368.203S165.703 385.656 174.078 388.484L178.5 390C187.758 393.18 198.18 396.621 208.342 398.309C208.277 398.893 208 399.4 208 400V408C208 416.844 215.156 424 224 424S240 416.844 240 408V400C240 399.422 239.73 398.934 239.672 398.373C263.33 394.732 280.297 381.973 283.984 361.75C291.234 321.719 253.312 311.391 228.219 304.547L222.359 302.937C193.531 294.859 194.406 290.062 195.5 283.969C197.547 272.828 216.453 270.437 233.078 272.922C239.281 273.844 246.109 275.859 252.594 278C260.922 280.75 270.031 276.188 272.797 267.797C275.547 259.406 270.984 250.359 262.594 247.594C253.592 244.635 246.432 242.83 240 241.723V232C240 223.156 232.844 216 224 216S208 223.156 208 232V241.143C184.334 244.775 167.703 258.027 164.016 278.25C156.828 317.812 195.266 328.578 213.734 333.75L219.797 335.422C249.953 343.641 254.062 347.391 252.5 356.031C250.453 367.156 231.594 369.594 214.828 367.062ZM442.938 162.094L391.156 58.547C383.02 42.277 366.391 32 348.199 32H99.781C81.596 32 64.973 42.273 56.84 58.539L5.066 162.086C1.734 168.75 0 176.098 0 183.547V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V183.535C448 176.092 446.268 168.752 442.938 162.094ZM240 64H348.219C354.344 64 359.812 67.375 362.531 72.844L406.109 160H240V64ZM85.469 72.828C88.188 67.375 93.656 64 99.781 64H208V160H41.889L85.469 72.828ZM416 416C416 433.674 401.674 448 384 448H64C46.326 448 32 433.674 32 416V192H416V416Z" })
  }
));
BoxDollarLight.displayName = "BoxDollarLight";
var BoxDollar_default = BoxDollarLight;
