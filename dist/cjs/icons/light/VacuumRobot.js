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
var VacuumRobot_exports = {};
__export(VacuumRobot_exports, {
  default: () => VacuumRobot_default
});
module.exports = __toCommonJS(VacuumRobot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VacuumRobotLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M139.312 308.688C133.062 302.438 122.937 302.438 116.688 308.688S110.438 325.063 116.688 331.312L180.688 395.312C183.812 398.438 187.906 400 192 400S200.188 398.438 203.312 395.312C209.562 389.062 209.562 378.937 203.312 372.688L139.312 308.688ZM235.312 212.688C229.062 206.438 218.937 206.438 212.688 212.688S206.438 229.063 212.688 235.312L276.688 299.312C279.812 302.438 283.906 304 288 304S296.188 302.438 299.312 299.312C305.562 293.062 305.562 282.937 299.312 276.688L235.312 212.688ZM155.312 228.688C149.062 222.438 138.937 222.438 132.688 228.688S126.438 245.063 132.688 251.312L260.688 379.312C263.812 382.438 267.906 384 272 384S280.188 382.438 283.312 379.312C289.562 373.062 289.562 362.937 283.312 356.688L155.312 228.688ZM256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM380.641 131.344C346.938 97.656 301.781 78.906 255.797 80C209.812 80.562 166.094 99.281 132.687 132.688C126.437 138.938 126.437 149.063 132.687 155.312S149.062 161.562 155.312 155.312C182.781 127.844 218.609 112.469 256.188 112C295.297 112 330.5 126.438 358.016 153.969C385.562 181.5 400.469 217.688 400 255.812C399.531 293.375 384.156 329.219 356.688 356.688C350.438 362.938 350.438 373.063 356.688 379.312C359.812 382.438 363.906 384 368 384S376.188 382.438 379.312 379.312C412.719 345.906 431.438 302.188 432 256.188C432.562 209.375 414.328 165.031 380.641 131.344Z" })
  }
));
VacuumRobotLight.displayName = "VacuumRobotLight";
var VacuumRobot_default = VacuumRobotLight;
