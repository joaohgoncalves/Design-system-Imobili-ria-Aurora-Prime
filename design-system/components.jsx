import { forwardRef } from 'react';

const joinClassNames = (...classNames) => classNames.filter(Boolean).join(' ');

export function Button({ as: Component = 'button', variant = 'primary', className = '', children, ...props }) {
  const variantClassName = {
    primary: 'ds-btn-primary',
    secondary: 'ds-btn-secondary',
    danger: 'ds-btn-danger',
  }[variant];

  return (
    <Component className={joinClassNames('ds-btn', variantClassName, className)} {...props}>
      {children}
    </Component>
  );
}

export const Field = forwardRef(function Field(
  { as: Component = 'input', label, boxed = false, className = '', labelClassName = '', ...props },
  ref,
) {
  return (
    <label className={joinClassNames('block', className)}>
      {label ? <span className={joinClassNames('ds-field-label', labelClassName)}>{label}</span> : null}
      <Component ref={ref} className={boxed ? 'ds-input-box' : 'ds-input'} {...props} />
    </label>
  );
});

export function Alert({ tone = 'danger', children, className = '' }) {
  return <div className={joinClassNames('ds-alert', `ds-alert-${tone}`, className)}>{children}</div>;
}

export function Panel({ children, className = '', flat = false }) {
  return <div className={joinClassNames(flat ? 'ds-panel-flat' : 'ds-panel', className)}>{children}</div>;
}

export function PageHeader({ eyebrow, title, description, actions, compact = false }) {
  return (
    <section className={joinClassNames('border-b border-black/8', compact ? 'pb-8' : 'pb-10')}>
      {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
      <div className="mt-6 flex flex-col gap-7 xl:flex-row xl:items-end xl:justify-between">
        <div className="max-w-5xl">
          <h2 className={compact ? 'ds-heading-lg' : 'ds-heading-xl'}>{title}</h2>
          {description ? <p className="ds-copy mt-5 max-w-2xl">{description}</p> : null}
        </div>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, description }) {
  return (
    <div>
      {eyebrow ? <p className="ds-eyebrow">{eyebrow}</p> : null}
      <h2 className="ds-heading-lg mt-3">{title}</h2>
      {description ? <p className="ds-copy mt-4">{description}</p> : null}
    </div>
  );
}

export function DataTable({ children, className = '' }) {
  return (
    <Panel className={joinClassNames('overflow-hidden', className)}>
      <div className="overflow-x-auto">
        <table className="ds-table">{children}</table>
      </div>
    </Panel>
  );
}
