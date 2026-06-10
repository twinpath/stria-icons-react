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
var FieldHockeyStickBall_exports = {};
__export(FieldHockeyStickBall_exports, {
  default: () => FieldHockeyStickBall_default
});
module.exports = __toCommonJS(FieldHockeyStickBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FieldHockeyStickBallRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424.059 336C375.444 336 335.999 375.414 335.999 424C335.999 472.582 375.444 512 424.059 512S511.999 472.582 511.999 424C511.999 375.414 472.675 336 424.059 336ZM424.059 464C401.969 464 383.999 446.055 383.999 424S401.969 384 424.059 384C446.083 384 463.999 401.945 463.999 424S446.083 464 424.059 464ZM511.014 58.875C508.28 44.875 500.233 32.813 488.374 24.938L464.233 8.844C440.202 -7.125 407.421 -0.688 391.124 23.188L155.327 370.375C150.936 376.625 143.436 378.219 140.202 376.375C134.968 373.406 134.749 368.438 134.889 366.438C135.014 364.688 135.639 362.938 136.686 361.438L145.593 348.656C166.858 318.156 159.389 276 128.983 254.688C114.186 244.375 96.327 240.344 78.514 243.5C60.749 246.656 45.296 256.562 35.014 271.375L26.139 284.094C11.124 305.656 2.218 330.812 0.389 356.812C-3.689 413.469 24.499 466.031 73.952 494C94.874 505.844 118.577 512 142.968 512C145.702 512 148.468 511.938 151.233 511.781C196.811 509.156 239.827 485 266.468 446.906L502.811 98.906C510.843 87.094 513.749 72.906 511.014 58.875ZM226.936 419.656C208.843 445.562 179.514 462.062 148.499 463.844C130.593 465.125 112.843 460.875 97.577 452.25C64.421 433.5 45.53 398.25 48.264 360.219C49.499 342.812 55.452 325.969 65.514 311.531L74.421 298.781C77.374 294.531 81.811 291.656 86.905 290.75C88.046 290.562 89.186 290.469 90.311 290.469C94.249 290.469 98.093 291.656 101.421 294C110.218 300.156 112.374 312.375 106.218 321.219L97.311 334C91.327 342.562 87.764 352.594 87.014 362.969C85.718 380.875 92.827 404.781 116.546 418.125C142.139 432.75 176.468 423.844 194.843 397.656L368.315 142.23L399.477 165.602L226.936 419.656Z" })
  }
));
FieldHockeyStickBallRegular.displayName = "FieldHockeyStickBallRegular";
var FieldHockeyStickBall_default = FieldHockeyStickBallRegular;
