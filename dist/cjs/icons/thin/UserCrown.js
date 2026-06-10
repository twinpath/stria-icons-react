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
var UserCrown_exports = {};
__export(UserCrown_exports, {
  default: () => UserCrown_default
});
module.exports = __toCommonJS(UserCrown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserCrownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272.844 304H175.156C78.562 304 0 379.375 0 472C0 494.062 18.594 512 41.438 512H406.562C429.406 512 448 494.062 448 472C448 379.375 369.438 304 272.844 304ZM406.562 496H41.438C27.406 496 16 485.219 16 472C16 388.188 87.406 320 175.156 320H272.844C360.594 320 432 388.188 432 472C432 485.219 420.594 496 406.562 496ZM104 128H344C348.406 128 352 124.406 352 120V8C352 5.188 350.531 2.594 348.125 1.125C345.719 -0.281 342.719 -0.375 340.25 0.937L284 30.938L227.75 0.938C225.438 -0.312 222.562 -0.312 220.25 0.938L164 30.938L107.75 0.938C105.281 -0.375 102.281 -0.281 99.875 1.125C97.469 2.594 96 5.188 96 8V120C96 124.406 99.594 128 104 128ZM112 21.344L160.25 47.062C162.562 48.312 165.438 48.312 167.75 47.062L224 17.062L280.25 47.062C282.562 48.312 285.438 48.312 287.75 47.062L336 21.344V112H112V21.344ZM335.781 159.469C331.906 218.094 282.812 264 224 264S116.094 218.094 112.219 159.469C111.969 155.25 108.438 152 104.25 152C104.094 152 103.906 152 103.719 152.031C99.312 152.313 95.969 156.125 96.281 160.531C100.688 227.531 156.781 280 224 280S347.312 227.531 351.719 160.531C352.031 156.125 348.687 152.313 344.281 152.031C339.562 151.219 336.031 155.094 335.781 159.469Z" })
  }
));
UserCrownThin.displayName = "UserCrownThin";
var UserCrown_default = UserCrownThin;
