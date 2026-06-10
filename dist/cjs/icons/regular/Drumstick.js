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
var Drumstick_exports = {};
__export(Drumstick_exports, {
  default: () => Drumstick_default
});
module.exports = __toCommonJS(Drumstick_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrumstickRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 165.435C512 125.409 497.843 87.752 471.036 57.578C422.632 2.585 360.888 -0.001 342.678 -0.001C297.491 -0.001 254.069 17.864 221.856 49.705C195.416 76.135 160.176 119.254 160 189.186V277.912L119.469 318.322C113.446 324.425 105.561 327.247 97.379 327.247C83.622 327.247 79.1 320.005 60.336 320.005C40.535 320.005 21.414 329.785 9.991 347.195C3.27 357.304 0 368.824 0 380.284C0 402.724 16.865 439.869 59.15 439.869C64.073 439.869 69.012 439.299 73.852 438.189C72.743 443.03 72.173 447.962 72.173 452.876C72.173 467.885 77.488 482.729 88.975 494.311C100.638 505.976 116.076 512 131.655 512C164.538 512 192.022 485.421 192.022 451.709C192.022 432.692 184.781 428.694 184.781 414.693C184.781 406.535 187.602 398.67 193.704 392.568L234.141 352H261.778L261.866 351.912H323.004C361.762 351.912 395.77 341.787 427.026 320.791C480.774 284.923 512 226.194 512 165.435ZM464.626 164.227C464.626 225.404 412.329 303.918 323.004 303.918H239.979C222.306 303.918 207.979 289.591 207.979 271.918V189.684C207.979 148.689 222.231 117.07 255.739 83.699C281.261 58.352 311.543 47.84 340.804 47.84C395.583 47.84 464.626 89.739 464.626 164.227Z " })
  }
));
DrumstickRegular.displayName = "DrumstickRegular";
var Drumstick_default = DrumstickRegular;
