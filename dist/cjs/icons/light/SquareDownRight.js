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
var SquareDownRight_exports = {};
__export(SquareDownRight_exports, {
  default: () => SquareDownRight_default
});
module.exports = __toCommonJS(SquareDownRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDownRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416ZM64 448C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416C416 433.645 401.645 448 384 448H64ZM297.539 369.535C318.929 369.535 337.546 351.205 337.524 329.263L335.193 196.117C335.181 179.887 325.492 165.38 310.51 159.148C295.506 152.939 278.403 156.342 266.913 167.833L246.627 188.118L195.716 137.206C180.115 121.606 154.748 121.606 139.147 137.206L105.206 171.147C89.606 186.748 89.606 212.115 105.206 227.716L156.118 278.627L135.833 298.913C124.342 310.403 120.939 327.506 127.148 342.51C133.347 357.459 147.787 367.126 163.951 367.204L297.539 369.535ZM158.46 321.54L201.373 278.627L127.833 205.088C124.718 201.973 124.718 196.89 127.833 193.775L161.775 159.833C164.89 156.718 169.973 156.718 173.088 159.833L246.627 233.373L289.54 190.46C294.075 185.925 303.189 188.192 303.207 196.393L305.538 329.539C305.569 335.455 300.068 337.549 297.815 337.549L164.393 335.207L164.117 335.196C157.257 335.196 153.204 326.796 158.46 321.54Z" })
  }
));
SquareDownRightLight.displayName = "SquareDownRightLight";
var SquareDownRight_default = SquareDownRightLight;
