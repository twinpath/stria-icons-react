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
var Toolbox_exports = {};
__export(Toolbox_exports, {
  default: () => Toolbox_default
});
module.exports = __toCommonJS(Toolbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToolboxThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.627 214.627L425.373 137.373C419.371 131.371 411.232 128 402.746 128H384V72C384 49.938 366.062 32 344 32H168C145.938 32 128 49.938 128 72V128H109.254C100.768 128 92.629 131.371 86.627 137.373L9.373 214.627C3.371 220.629 0 228.768 0 237.254V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V237.254C512 228.768 508.629 220.629 502.627 214.627ZM144 72C144 58.766 154.781 48 168 48H344C357.219 48 368 58.766 368 72V128H144V72ZM496 416C496 442.467 474.467 464 448 464H64C37.533 464 16 442.467 16 416V328H152V376C152 380.422 155.594 384 160 384S168 380.422 168 376V328H344V376C344 380.422 347.594 384 352 384S360 380.422 360 376V328H496V416ZM496 312H360V264C360 259.578 356.406 256 352 256S344 259.578 344 264V312H168V264C168 259.578 164.406 256 160 256S152 259.578 152 264V312H16V237.254C16 232.98 17.664 228.963 20.688 225.941L97.939 148.688C100.963 145.664 104.98 144 109.254 144H402.746C407.02 144 411.037 145.664 414.059 148.686L491.314 225.941C494.336 228.963 496 232.98 496 237.254V312Z" })
  }
));
ToolboxThin.displayName = "ToolboxThin";
var Toolbox_default = ToolboxThin;
